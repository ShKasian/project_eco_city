import { Container } from '@mui/material'
import React from 'react'

export default function FAQ(): JSX.Element {
  return (
    <Container maxWidth="lg" color='text.white'>
    <div className="accordion w-100" id="basicAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="true" aria-controls="collapseOne" />
    </h2>
    <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
      data-mdb-parent="#basicAccordion" >
        <strong> ⦿ Что такое вторичная переработка?</strong>
      <div className="accordion-body"> 
         Вторичная переработка - это процесс обработки отходов с целью получения вторичных сырьевых материалов для последующего использования в производстве новых товаров.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo" />
    </h2>
    <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion" >
        <strong>⦿ Какие материалы можно перерабатывать?</strong>
      <div className="accordion-body">
 Можно перерабатывать множество материалов, включая бумагу, пластик, стекло, металл, текстиль и многое другое.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree" />
    </h2>
    <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-mdb-parent="#basicAccordion" >
        <strong>⦿ Почему вторичная переработка важна для экологии?</strong> 
      <div className="accordion-body">
      Вторичная переработка помогает снизить количество отходов, уменьшить потребление природных ресурсов и сократить выбросы парниковых газов.
      </div>
    </div>
    
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree" />
    </h2>
    <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-mdb-parent="#basicAccordion" >
        <strong>⦿ Как я могу участвовать в вторичной переработке?</strong> 
      <div className="accordion-body">
      Вы можете начать с раздельного сбора отходов, участвовать в программе рециклинга и поддерживать компании, которые используют вторичные материалы.
      </div>
    </div>
  </div>
</div>
</Container>
  )
}


