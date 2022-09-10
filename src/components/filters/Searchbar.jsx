import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Input from '../app/Input';

const Searchbar = ({
  value,
  onSearch = () => {},
}) => (
  <div className="flex text-black-400 items-center relative">
    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute" />
    <Input
      className="w-72 pl-4"
      value={value}
      onChange={onSearch}
      placeholder="Escribe lo que quieres buscar"
      borderless
    />
    {value && <FontAwesomeIcon icon={faTimes} className="absolute right-0 cursor-pointer" onClick={() => onSearch('')} />}
  </div>
);

export default Searchbar;
