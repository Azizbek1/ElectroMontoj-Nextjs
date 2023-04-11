import React, { ReactElement } from 'react'
import DetailStyle from './servises.module.scss'
import Image from 'next/image';
import parse from 'html-react-parser'


export default function ServisesDetail(paths: any): ReactElement {
    const {servis} = paths.paths
    const {data} = servis

    return (
        <div className={DetailStyle.detail}>
            <h2 className={DetailStyle.detailTitle}>{data.name}</h2>
            <div className={DetailStyle.detailImage}>
                <Image src={data.file} alt="png" width={773} height={513}/>
            </div>
            <div className={DetailStyle.text}>
                {parse(data.text)}
            </div>
        </div>
    )
}
