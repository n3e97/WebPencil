import React, { ReactElement, ReactNode } from 'react'
import style from './style.less'
import { history } from '../app'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

export interface BasicLayoutProps {
    contentClassName?: string,
    className?: string
    headNode?: ReactNode,
    asideClass?:string,
    asideNode?:ReactNode, 
    children?:ReactNode,
    beforeBack?: () => Promise<boolean> | boolean,
    showBackButton?: boolean
}

export default function Home ({
    className='', 
    headNode=null, 
    asideClass='', 
    asideNode=null, 
    children=null, 
    beforeBack, 
    showBackButton =true,
    contentClassName='',
}: BasicLayoutProps){
    
    const onGoBack = async () => {
        if((beforeBack && await beforeBack())|| !beforeBack){
            history.goBack()
        }
    }

    return <section 
        className={`${style.section} ${className}`}
    >
    <header>
        {
           showBackButton && 
           <Button 
            ghost={true}
            onClick={onGoBack}
            shape="circle"
            size="small"
            icon={<LeftOutlined />}
            ></Button>
        }
        {
            process.env.BUILD_ENV === 'development'&&
            <Button 
            ghost={true}
            onClick={() => location.reload()}
            shape="circle"
            size="small"
            >reload</Button>
        }
        
        {headNode}
    </header>
    <div className={style.wrapper}>
        <aside className={asideClass} >
            {asideNode}
        </aside>
        <main className={contentClassName}>
            {children}
        </main>
    </div>
</section>
}