import GeolocateButton from '@/components/Header/GeolocateButton';
import LangSelect from '@/components/Header/LangSelect';
import UnitToggle from '@/components/Header/UnitToggle';
import SearchLocation from '@/components/Header/SearchLocation';

const Header = () => {
  return (
    <header className="flex flex-wrap items-center gap-4 p-4 md:flex-nowrap">
      <SearchLocation />

      <div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
        <GeolocateButton />
        <UnitToggle />
        <LangSelect />
      </div>
    </header>
  );
};

export default Header;
