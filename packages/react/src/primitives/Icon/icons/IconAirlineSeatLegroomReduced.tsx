import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconAirlineSeatLegroomReduced = (props) => {
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
          d="M19.97 19.2C20.15 20.16 19.42 21 18.5 21H14V18L15 14H9C7.35 14 6 12.65 6 11V3H12V9H17C18.1 9 19 9.9 19 11L17 18H18.44C19.17 18 19.83 18.49 19.97 19.2V19.2ZM5 12V3H3V12C3 14.76 5.24 17 8 17H12V15H8C6.34 15 5 13.66 5 12Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
