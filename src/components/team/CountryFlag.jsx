// src/components/team/CountryFlag.jsx
import React from 'react';

// SVGs de las banderas
const PeruFlag = () => <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#D91023" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/></svg>;
const ChileFlag = () => <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#0039A6" d="M0 0h1v1H0z"/><path fill="#D52B1E" d="M0 1h3v1H0z"/><path fill="#fff" d="M.4.4L.5.7h.3L.6.5l.1.2.1-.2.2.2h.3L.8.2.5 0 .2.2z"/></svg>;
const ArgentinaFlag = () => <svg width="24" height="24" viewBox="0 0 9 6"><path fill="#75AADB" d="M0 0h9v6H0z"/><path fill="#F9F9F9" d="M0 2h9v2H0z"/><g fill="#FFC400" transform="translate(4.5 3)"><circle r=".8"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(23)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(45)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(68)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(90)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(113)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(135)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(158)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(180)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(203)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(225)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(248)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(270)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(293)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(315)"/><path d="M0-1v1h.1V-.6l.3.1-.2.3.3.2-.3.1v.2h-.2v-.2l-.3-.1.2-.3-.3-.2.3-.1V-1z" transform="rotate(338)"/></g></svg>;
const ColombiaFlag = () => <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#FFCD00" d="M0 0h3v2H0z"/><path fill="#003893" d="M0 1h3v.5H0z"/><path fill="#C8102E" d="M0 1.5h3v.5H0z"/></svg>;


const CountryFlag = ({ country }) => {
  switch (country) {
    case 'Peru':
      return <PeruFlag />;
    case 'Chile':
      return <ChileFlag />;
    case 'Argentina':
      return <ArgentinaFlag />;
    case 'Colombia':
      return <ColombiaFlag />;
    default:
      return null;
  }
};

export default CountryFlag;