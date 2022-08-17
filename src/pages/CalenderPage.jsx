import React, { useState,useRef, useCallback, useEffect } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.css';
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import myTheme from '../components/Composition/MyTheme';

import moment from 'moment';
import 'moment/locale/ko';
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import BackIcon from '../components/ui/icon/BackIcon';
import { useInternalRouter } from "./routing";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      backgroundColor: 'violet',
      color: '#000000',
      title: 'KB 주식회사 채용',
      isVisible: true,
      category: 'allday', //allday 고정 
      start: '2022-08-15',
      end: '2022-08-20',
      customStyle: {
        fontFamily: "four",
        fontSize: '25px',
      }
    },
    {
        id: '2',
        calendarId: 'cal2',
        backgroundColor: 'lightblue',
        color: '#000000',
        title: '국민은행 서류 접수',
        isVisible: true,
        category: 'allday', //allday 고정 
        start: '2022-08-22',
        end: '2022-08-24',
        customStyle: {
          fontFamily: "four",
          fontSize: '25px',
        }
      }
  ];


const calendars = [
  {
    id: "1",
    name: "Personal",
    color: "#ffffff",
    bgColor: "#9e5fff",
    dragBgColor: "#9e5fff",
    borderColor: "#9e5fff"
  }
];

const template = {
    allday(event) {
      return `${event.title}<i class="fa fa-refresh"></i>`;
    },
    alldayTitle() {
      return 'All Day';
    }
  };
  


export default function CalenderPage() {
    const [value, onChange] = useState(new Date());
    const {goBack,push} = useInternalRouter();
    const [selectedDateRangeText, setSelectedDateRangeText] = useState('');
    const cal = useRef(null);
    const calendarInst = null;
    useEffect(()=>{
        setSelectedDateRangeText(moment(value).format('YYYY-MM'))
    },[])
    const onAfterRenderEvent = (event) => {
        console.log(event.title);
      };

      const getInstance = function(){
          return cal.current.getInstance()
      }
     const onClickNavi= (event) => {

        const button = event.target
        const actionName = (button.getAttribute('data-action') ?? 'month').replace('move-', '');
        console.log(getInstance())
        getInstance()[actionName]();
        const calInstance = getInstance();
        const viewName = calInstance.getViewName();
        console.log(calInstance);
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();
        console.log(calDate,rangeStart,rangeEnd)
    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText;

    switch (viewName) {
      case 'month': {
        dateRangeText = `${year}-${month}`;
        break;
      }
      case 'week': {
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        const endMonth = rangeEnd.getMonth() + 1;
        const endDate = rangeEnd.getDate();

        const start = `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
        const end = `${year}-${endMonth < 10 ? '0' : ''}${endMonth}-${
          endDate < 10 ? '0' : ''
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      }
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }
        setSelectedDateRangeText(dateRangeText)

      }

    
    return(
        <div>
            <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="지원 기업 채용 일정"/>
            <div
            style = {{
                margin: "30px auto",
            }}>
                <div style = {{
                    fontFamily: "six",
                    textAlign: "center",
                    fontSize: "30px",
                    

                }}>{selectedDateRangeText}</div>
            </div>


            <div
            style = 
            {{
                margin:"0",
            }}>
                <div>       
                        <button
                            type="button"
                            className="btn btn-default btn-sm move-day"
                            data-action="move-prev"
                            onClick={onClickNavi}
                            style = {{
                                background : "#ffcc00",
                                width: "40%",
                                fontFamily: "six",
                                margin: "0 5% 0 5%",
                                border: "none",
                                

                            }}
                        >
                            PREV
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-sm move-day"
                            data-action="move-next"
                            onClick={onClickNavi}
                            style = {{
                                background : "#ffcc00",
                                width: "40%",

                                fontFamily: "six",
                                margin: "5%",
                                border: "none"
                            }}
                        >
                            NEXT
                        </button>
                </div>
            </div>


            <div>
            <Calendar
                height="450px"
                view="month"
                month={{
                dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                startDayOfWeek : 0,
                }}
                ref={cal}
                calendars={calendars}
                events={initialEvents}
                onAfterRenderEvent={onAfterRenderEvent}
                template={template}
                disableDblClick={true}
                
            />
            </div>
            <iframe src="https://giphy.com/embed/SkJRWt1Mo9CSlgrHcE" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kbfinancialgroup-transparent-kb-SkJRWt1Mo9CSlgrHcE"></a></p></div>
        
    )
}