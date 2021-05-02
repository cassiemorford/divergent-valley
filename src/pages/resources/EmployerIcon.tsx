import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from '@fortawesome/fontawesome-svg-core';

interface EmployerIconProps {
  company: string;
}

function EmployerIcon({ company }: EmployerIconProps) {
  const lookup: IconLookup = {
    prefix: 'fab',
    iconName: company as IconName,
  };
  const iconDefinition: IconDefinition =
    findIconDefinition(lookup) || 'briefcase';

  return (
    <span className='company-icon'>
      <FontAwesomeIcon icon={iconDefinition} />
    </span>
  );
}

export default EmployerIcon;
