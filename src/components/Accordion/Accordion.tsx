import React from 'react';
import styles from './Accordion.module.css';
import { SearchResult } from '../../types';

interface AccordionProps {
  result: SearchResult;
}

const Accordion: React.FC<AccordionProps> = ({ result }) => {
  return (
    <details className={styles.accordion} name="accordion">
      <summary className={styles.accordionSummary}>{result.name}</summary>
      <div className={styles.accordionContent}>
        <p>{result.description}</p>
      </div>
    </details>
  );
};

export default Accordion;