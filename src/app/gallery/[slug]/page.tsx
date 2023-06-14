import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import Title from '@/components/layout/Title';
import { getPaintingBySlug } from '@/lib/database/getPaintingBySlug';

// * Params
interface IParams {
  params: {
    slug: string;
  };
}

// * Page
export default async function PaintingDetailsPage({
  params: { slug },
}: IParams) {
  // * Data
  const painting = await getPaintingBySlug(slug);

  // * Render
  return (
    <Main>
      <Container>
        <Title>{painting.title}</Title>
      </Container>
    </Main>
  );
}
