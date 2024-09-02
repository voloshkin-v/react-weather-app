import type { GroupBase } from 'react-select';
import AsyncSelect, { type AsyncProps } from 'react-select/async';

/**
 * Built on top of AsyncSelect. Should be used within the app
 */
const AppAsyncSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: AsyncProps<Option, IsMulti, Group>,
) => {
  // TODO debounce
  return <AsyncSelect cacheOptions isClearable {...props} />;
};

export default AppAsyncSelect;
