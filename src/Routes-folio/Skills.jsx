// import { useState } from "react";
import { ZmdiLanguageJavascript as Javascript } from "../assets/langs/array.icons";
import { DeviconHtml5 as Html5 } from "../assets/langs/array.icons";
import { DeviconCss3 as Css3 } from "../assets/langs/array.icons";
import { LogosReact as Reactjs } from "../assets/langs/array.icons";
import { LogosTailwindcssIcon as Tailwind } from "../assets/langs/array.icons";
import { SimpleIconsShadcnui as Shadcn } from "../assets/langs/array.icons";
import { BiBootstrap as Bootstrap } from "../assets/langs/array.icons";
import { DeviconVitejs as Vite } from "../assets/langs/array.icons";
import { DeviconStorybook as Storybook } from "../assets/langs/array.icons";
import { 
     DeviconPostgresql as Postgresql,
     LogosNodejsIcon as Node, 
     SimpleIconsExpress as Express,
     DeviconSequelize as Sequelize,
     SimpleIconsSocketdotio as Socket,
     DeviconNestjs as Nest,
     LogosLaravel as Laravel,
     WhhPython as Python,
     DeviconMysql as MySQL,
    //  LaPhp as PHP
    } from "../assets/langs/array.icons";

import { PajamasGit as Git,
        // IconoirNpm as NPM,
        FontistoWordpress as WP,
        LogosVisualStudioCode as VSC,
        SimpleIconsVercel as Vercel,
        LogosAirtable as Airtable,
        SimpleIconsMiro as Miro,
        DeviconFirebase as Firebase,
        DeviconNetlify as Netlify,
        SimpleIconsDiagramsdotnet as Dbdiagram,
        // DeviconSwagger as Swagger
 } from "../assets/langs/array.icons";

import { LogosNginx as Nginx,
        SimpleIconsAxios as Axios,
        SkillIconsRedux as Redux,
        LogosWebhooks as Webhook,
        VscodeIconsFileTypeCypress as Cypress,
        VscodeIconsFileTypeJest as Jest,
        LogosZod as Zod,
        SimpleIconsDialogflow as DialogFlow,
        LogosGithubActions as GitActions,
        DeviconPostman as Postman, 
        LogosAtlassian as Atlassian } from "../assets/langs/array.icons";
// import data from '../data.json';
import CardBackend from "./Components/cards_project/CardBackend";
import CardFrontend from "./Components/cards_project/CardFrontend";
import CardFullStack from "./Components/cards_project/CardFullStack";
import CardToolsProject from "./Components/cards_project/CardToolsProject";


const Skills = () => {
        
    const skills =[
        <Html5 key="Html5"/>,
        <Css3 key="Css3"/>,
        <Javascript key="Javascript"></Javascript>,
        <Reactjs key="Reactjs"/>,
        <Tailwind key="Tailwind"/>,
        <Shadcn key="Shadcn"/>, 
        <Bootstrap key="Bootstrap"></Bootstrap>,
        <Vite key="Vite"></Vite>,
        // <Storybook key="Storybook"/>   
    ]

    const backSkills = [
        <Postgresql key="Postgresql"></Postgresql>,
        <Node key="Node"></Node>,
        <Express key="Express"></Express>,
        <Sequelize key="Sequelize"/>,
        <Python key="Python" />,
        <Nest key="Nest" />,
        // <Laravel key="Laravel" />,
        <MySQL key="MySQL" />,
        <Postman key="Postman"/>,
    ]

    const projectSkills = [
        <Git key="Git"/>,
        <WP key="wordpress"/>,
        <VSC key="VSC"/>,
        <Firebase key="Firebase"/>,
        <Airtable key="Airtable"/>,
        <Atlassian key="Atlassian"/>,
        // <Miro key="Miro" />,
        <Vercel key="Vercel"/>,
        <Dbdiagram key="Dbdiagram"/>,
        <Netlify key="Netlify"/>,
    ]
    

    const fullstackSkills = [

        <Nginx key="Nginx"/>,
        <Axios key="Axios"/>,
        <Redux key="Redux"/>,
        <Webhook key="Webhook"/>,
        <Socket key="Socket" />,
        <Jest key="Jest"/>,
        <Zod key="Zod"/>,
        <DialogFlow key="Dialogflow"/>,
        <GitActions key="Gitactions"/>,   
    ]
    // console.log(data)
    

        return (
            <>
            <section className="container text-center items-center h-auto m-auto">
                <div className="text-center p-4">
                    <h1 className="text-intro" >My tech stack</h1>
                </div>
                <div className="py-2">
                    <p style={{color:"graytext"}}>
                    En mi viaje por el mundo del desarrollo web, he cultivado experiencia y habilidades en una variedad de tecnologías. 
                    <br />Mi stack tecnológico incluye:
                    </p>
                </div>
                <div className="row mx-0 mb-3 w-100 justify-content-center">
                    <CardFrontend skills={skills}></CardFrontend>
                        <CardBackend backSkills={backSkills}></CardBackend>
                </div>
                <div className="row w-100 mt-4  m-0 justify-content-center">
                    <CardFullStack fullstackSkills={fullstackSkills}></CardFullStack>
                        <CardToolsProject projectSkills={projectSkills}></CardToolsProject>
                </div>
            </section>  
            </>
        );
};
        
 export default Skills;
