import { ScreenNavigationProp } from '@/src/navigation';
import { useNavigation as useNavigation_Import } from '@react-navigation/native';

export type UseNavigate = ScreenNavigationProp;

export const useNavigate = (): UseNavigate => {
  return useNavigation_Import<ScreenNavigationProp>();
};
