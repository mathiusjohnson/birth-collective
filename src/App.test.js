import { render } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
