import { useState, useEffect } from 'react';
import { SearchResult } from '../types';

export function useSearch(query: string) {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const eventSourceUrl = `${baseUrl}/search?query=${query}`;
        let eventSource: EventSource | null = null;

        const startSSE = () => {
            setLoading(true);
            setError(null);
            try {
                eventSource = new EventSource(eventSourceUrl);

                eventSource.onmessage = (event) => {
                    try {
                        console.log('Received event:', event.data);
                        if (event.data === 'done') {
                            eventSource?.close();
                            setLoading(false);
                            return;
                        }
                        
                        const newResult: SearchResult = JSON.parse(event.data);
                        setResults((prevResults) => [...prevResults, newResult]);
                    } catch (parseError) {
                        setError('Failed to parse server response.');
                    }
                };

                eventSource.addEventListener('end', () => {
                    eventSource?.close();
                    setLoading(false);
                });

                eventSource.onerror = (_event) => {
                    // Only set error if not a normal close
                    if (eventSource && eventSource.readyState === EventSource.CLOSED) {
                        setLoading(false);
                    } else {
                        setError('An error occurred while streaming data.');
                        setLoading(false);
                    }
                    eventSource?.close();
                };
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        startSSE();

        return () => {
            eventSource?.close();
            setLoading(false);
        };
    }, [query, baseUrl]);

    return { results, loading, error };
}