import Heading from "@/components/ui/heading/Heading";
import { Meta } from "@/utils/meta";
import Servises from "@/components/screens/sevises/Servises";
import { ServisesService } from "@/services/servises/servises.service";
import { GetStaticProps } from "next";

export default function servisesPage(props: any) {
  return (
    <Meta title="Page not found">
      <Servises {...props} />
    </Meta>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: servises } = await ServisesService.getAll();
    return {
      props: { servises },
    };
  } catch (error) {
    return {
      props: {
        servises: [],
      },
    };
  }
};
