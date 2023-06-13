import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';

// * Page
export default function AboutPage() {
  // * Render
  return (
    <Main>
      <Container>
        <Title>About</Title>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'About',
  description: 'TSK',
};