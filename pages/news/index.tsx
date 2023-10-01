import News from "@/components/screens/news/News";
import Heading from "@/components/ui/heading/Heading";
import { NewsService } from "@/services/news/news.service";
import { Meta } from "@/utils/meta";
import { GetStaticProps } from "next";

export default function NewsPage(props: any) {
  return (
    <Meta title="Page not found">
      <News {...props} />
    </Meta>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: news } = await NewsService.getAll();
    return {
      props: { news },
    };
  } catch (error) {
    return {
      props: {
        news: [],
      },
    };
  }
};