import React from 'react';
import { 
    TWorkspace, 
    THeader ,
    THeaderContent,
    TContent
} from '../atoms/template/TemplateExporter';


const MainTemplate = ({headerContent, bodyContent}) =>
    <TWorkspace>
        <THeader>
            <THeaderContent>
                {headerContent}
            </THeaderContent>
        </THeader>
        <TContent>
            {bodyContent}
        </TContent>
    </TWorkspace>

export default MainTemplate;