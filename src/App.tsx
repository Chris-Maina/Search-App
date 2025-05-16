import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import { useSearch } from './hooks/useSearch';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Nav from './components/Nav/Nav';

const App: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const { results, loading, error } = useSearch(query);

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };

    return (
        <div className={styles.App}>
            <Nav />
            <main className={styles.mainContent}>
                <h1>Search Application</h1>
                <SearchBar onSearch={handleSearch} />
                {loading && <p>Loading...</p>}
                {error && (
                  <p className={styles.errorMessage} role="alert" aria-live="assertive">
                    Error: {error}
                  </p>
                )}
                <section aria-label="Search Results" className={styles.resultsSection}>
                    {results.map((result, index) => (
                        <Accordion key={index} result={result} />
                    ))}
                </section>
            </main>
            <footer>
                <span>Learnings from REACT Paris 2025</span>
                <Button
                    label="Click Me"
                    popoverTarget="main-modal"
                    popoverTargetAction="show"
                    aria-haspopup="dialog"
                    aria-controls='main-modal'
                />
            </footer>
            <Modal id="main-modal" title="Hooray! 🎉">
                <p>This is a modal using semantic HTML, popover and popovertargeaction attributes.</p>
                <p>Styled using ::backdrop CSS pseudo-element and :popover-open CSS pseudo-class.</p>
                <p>Animated using @starting-style CSS at-rule.</p>
            </Modal>
        </div>
    );
};

export default App;