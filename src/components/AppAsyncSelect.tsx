import type { GroupBase } from 'react-select';
import AsyncSelect, { type AsyncProps } from 'react-select/async';
import debounce from 'debounce-promise';
import { locationService } from '@/api/location';

/**
 * Built on top of AsyncSelect. Should be used within the app
 */
const AppAsyncSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  loadOptions,
  ...props
}: AsyncProps<Option, IsMulti, Group>) => {
  const wait = 1000;
  const debouncedLoadOptions = debounce(loadOptions!, wait);

  return <AsyncSelect loadOptions={debouncedLoadOptions} cacheOptions isClearable {...props} />;
};

export default AppAsyncSelect;
