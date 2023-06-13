import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';

// * Page
export default function ContactPage() {
  // * Render
  return (
    <Main>
      <Container>
        <Title>Contact</Title>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Contact',
  description: 'TSK',
};
