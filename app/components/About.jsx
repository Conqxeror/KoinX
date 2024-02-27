import React from 'react';
import Divider from './Divider';
import Image from 'next/image';
import Info1 from '../../public/info1.png';
import Info2 from '../../public/Info2.png';

export default function About() {
    return (
        <div className='bg-white mt-5 p-5'>
            <div className='text-xl font-bold'>About Bitcoin</div>
            <div className='font-bold text-lg pt-5'>What is Bitcoin?</div>
            <div className='pt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eligendi non? Odit doloremque, corporis numquam beatae tenetur architecto sed dolore maxime minima nihil, distinctio similique sequi accusantium impedit dolorem voluptate nemo nobis necessitatibus fuga dicta. Ducimus ipsum fugiat eius dignissimos.
            </div>
            <Divider />
            <div className='font-bold text-lg'>Lorem ipsum dolor sit amet.</div>
            <div className='pt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ullam odio deleniti vitae, voluptates, illum obcaecati iste quasi quisquam tempore excepturi reprehenderit cumque adipisci nihil sint placeat sapiente accusantium dolorum error. Assumenda nostrum aspernatur, unde enim ex sit voluptatem illum mollitia cum perferendis deserunt rerum et blanditiis quia ipsum laborum sequi omnis nemo dolore accusantium. Error, consequatur dolorum odit veniam est corporis molestias dolorem voluptatibus excepturi nemo repudiandae dignissimos, reiciendis architecto itaque laboriosam quod beatae! Hic tempore commodi similique culpa maiores voluptatum fugiat consectetur, illum modi veniam ipsum velit sapiente molestias, nulla praesentium aliquid, magni molestiae quas? Excepturi blanditiis eligendi officia modi explicabo repellendus autem veritatis dolorum incidunt debitis inventore delectus voluptates ipsum vel eveniet, nostrum doloribus reiciendis. Nobis, numquam?
            </div>
            <Divider />
            <div className='text-xl font-bold'>Already Holding Bitcoin?</div>
            <div className='grid gap-5 md:grid-cols-2'>
                <InfoCard image={Info1} title='Calculate Your Profits' color='from-green-400 to-blue-900' />
                <InfoCard image={Info2} title='Calculate Your Tax Liability' color='from-orange-500 to-red-600' />
            </div>
            <Divider />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla eveniet fuga in suscipit consequatur quas explicabo eaque dicta similique ad sint cumque iusto, recusandae officia ea quod dolore sit molestiae corrupti expedita? Repudiandae tempora adipisci maiores qui quidem enim quibusdam sit ab aliquid atque, cum molestiae labore saepe deleniti similique neque error. Pariatur, recusandae impedit. Accusantium delectus dolore accusamus veritatis pariatur, architecto debitis dolorem voluptatibus perferendis dolorum facilis voluptates itaque corporis, quae sequi aspernatur, a qui cumque odio vero distinctio! Quidem odit ad mollitia tenetur aliquam. Temporibus, placeat unde!
            </div>
        </div>
    );
}

function InfoCard({ image, title, color }) {
    return (
        <div className={`bg-gradient-to-br ${color} p-2 rounded-md flex items-center gap-5 w-full md:w-full mt-5`}>
            <div className='h-fit'>
                <Image alt='L' src={image} width={110} height={110} />
            </div>
            <div className='flex flex-col justify-between gap-3'>
                <div className='text-sm font-bold text-white'>{title}</div>
                <div className='rounded-md bg-white text-xs w-fit font-bold text-center p-2'>Check Now</div>
            </div>
        </div>
    );
}
