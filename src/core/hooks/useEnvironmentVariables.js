import { useSelector } from 'react-redux';

const useEnvironmentVariables = () => useSelector((state) => state.get('environment'));

export default useEnvironmentVariables;
