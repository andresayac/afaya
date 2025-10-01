import React from 'react';
import { Link } from './Link';

interface TextWithLinksProps {
  text: string;
  links?: { [key: string]: string };
}

export const TextWithLinks: React.FC<TextWithLinksProps> = ({ text, links = {} }) => {
  // Función para procesar el texto y convertir marcadores en enlaces
  const processTextWithLinks = (text: string) => {
    if (!links || Object.keys(links).length === 0) {
      // Si no hay enlaces, solo formatear saltos de línea
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }

    let processedText = text;
    const linkMarkers: { marker: string; url: string; text: string }[] = [];

    // Buscar marcadores de enlaces en el texto (formato: [texto](url))
    Object.entries(links).forEach(([linkText, url]) => {
      const marker = `[${linkText}]`;
      if (processedText.includes(marker)) {
        const uniqueMarker = `__LINK_${linkMarkers.length}__`;
        linkMarkers.push({ marker: uniqueMarker, url, text: linkText });
        processedText = processedText.replace(marker, uniqueMarker);
      }
    });

    // Dividir por saltos de línea y procesar cada línea
    const lines = processedText.split('\n');
    
    return lines.map((line, lineIndex) => {
      const parts: React.ReactNode[] = [];
      let currentText = line;

      // Procesar enlaces en esta línea
      linkMarkers.forEach(({ marker, url, text }) => {
        if (currentText.includes(marker)) {
          const splitParts = currentText.split(marker);
          const newParts: React.ReactNode[] = [];

          splitParts.forEach((part, partIndex) => {
            if (partIndex > 0) {
              newParts.push(<Link key={`link-${lineIndex}-${partIndex}`} href={url}>{text}</Link>);
            }
            if (part) {
              newParts.push(part);
            }
          });

          currentText = '';
          parts.push(...newParts);
        }
      });

      // Si no se encontraron enlaces, agregar el texto completo
      if (parts.length === 0 && currentText) {
        parts.push(currentText);
      }

      return (
        <React.Fragment key={lineIndex}>
          {parts}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return <>{processTextWithLinks(text)}</>;
};