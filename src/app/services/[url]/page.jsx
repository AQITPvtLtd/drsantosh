import React from 'react'
import ServiceData from './ServiceData'
import { service } from '@/data/service';
// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
    const content = service.find((item) => item.url === params.url);


    return {
        title: content.meta_title,
        description: content.meta_desc,
        keywords: content.keyword,
    };
}
const page = ({ params }) => {
    const url = params.url;

    return (
        <div>
            <ServiceData url={url} />
        </div>
    )
}

export default page