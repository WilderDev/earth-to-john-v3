import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';

// * Page
export default function GalleryPage() {
  // * Render
  return (
    <Main>
      <Container>
        <Title>Gallery</Title>
      </Container>
    </Main>
  );
}

// * Metadata
export const metadata = {
  title: 'Gallery',
  description: 'TSK',
};
