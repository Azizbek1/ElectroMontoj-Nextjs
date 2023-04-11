import ServisesDetail from "@/components/screens/home/components/Servises/ServisesDetail";
import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ServisesService } from "@/services/servises/servises.service";

export default function ServiceId(paths: any): ReactElement {
  return <ServisesDetail paths={paths} />;
}

export const getStaticPaths = async () => {
  try {
    const { data: servises } = await ServisesService.getAll();
    const {data} = servises
    return {
      paths: data.map((serv: any) => ({
        params: {
          id: serv.id.toString(),
        },
      })),
      fallback: "blocking",
    };
  } catch (error) {
    return {
      props: {
        servises: [],
      },
    };
  }
};
export const getStaticProps: GetStaticProps = async ({
    params
}: any) => {
  try {
    const { data: servis } = await ServisesService.show(String(params.id));
    return {
      props: {servis},
    };
  } catch (error) {
    return {
      props: {
        servises: [],
      },
    };
  }
};
