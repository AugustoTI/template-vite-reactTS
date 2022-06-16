import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render correct', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
