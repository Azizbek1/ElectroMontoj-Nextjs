import React, { ReactElement } from "react";
import NewsDetailStyled from './news.module.scss'
import Image from "next/image";
import parse from 'html-react-parser'

export default function NewsDetail(paths: any): ReactElement {
    const {news} = paths.paths

    const {data} = news
  return (
    <div className={NewsDetailStyled.detail}>
      <h2 className={NewsDetailStyled.detailTitle}>{data.name}</h2>
      <div className={NewsDetailStyled.detailImage}>
        <Image src={data.file} alt="png" width={773} height={348} />
      </div>
      <div className={NewsDetailStyled.text}>{parse(data.text)}</div>
    </div>
  );
}
