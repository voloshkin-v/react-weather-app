import GeolocateButton from '@/components/Header/GeolocateButton';
import LangSelect from '@/components/Header/LangSelect';
import UnitToggle from '@/components/Header/UnitToggle';
import SearchLocation from '@/components/Header/SearchLocation';

const Header = () => {
  return (
    <header className="flex items-center gap-10 p-4">
      <SearchLocation />

      <div className="flex items-center gap-4">
        <GeolocateButton />
        <UnitToggle />
        <LangSelect />
      </div>
    </header>
  );
};

export default Header;
