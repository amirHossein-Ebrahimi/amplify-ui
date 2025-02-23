import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconMarkEmailUnread = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 8.98V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4H14.1C14.04 4.32 14 4.66 14 5C14 5.34 14.04 5.68 14.1 6H4L12 11L15.67 8.71C16.14 9.14 16.69 9.47 17.3 9.69L12 13L4 8V18H20V9.9C20.74 9.75 21.42 9.42 22 8.98ZM16 5C16 6.66 17.34 8 19 8C20.66 8 22 6.66 22 5C22 3.34 20.66 2 19 2C17.34 2 16 3.34 16 5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
