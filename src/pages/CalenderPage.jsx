import React, { useState,useRef, useCallback, useEffect } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.css';
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import randomHexColorCode from '../utils/randomHexGenerator';
import useApplyCompany from '../hooks/useApplyCompany';
import moment from 'moment';
import 'moment/locale/ko';
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import BackIcon from '../components/ui/icon/BackIcon';
import { useInternalRouter } from "./routing";
import { useRecoilValue } from 'recoil';
import { userInfoStore } from '../shared/store';
import datetimeConvert from "../utils/datetimeConvert"
import invertColor from '../utils/oppositeColorGenerator';
import Loading from '../components/ui/Loading';
const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
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
    const {goBack} = useInternalRouter();
    const userInfo = useRecoilValue(userInfoStore);
    const [eventData, setEventData] = useState([]);
    const {applyCompanyData, isLoading, isError} = useApplyCompany(userInfo.user_id);
    const [selectedDateRangeText, setSelectedDateRangeText] = useState('');
    const cal = useRef(null);
    const calendarInst = null;
    useEffect(()=>{
        setSelectedDateRangeText(moment(value).format('YYYY-MM'))
    },[])
    useEffect(()=>{
      if(isLoading){
        return
      }
      setEventData(()=>
        applyCompanyData.map((item,index) => {
          const bgColor = randomHexColorCode();
          const oppositeColor = invertColor(bgColor)
          const temp =     {
            id: index,
            calendarId: `cal${index}`,
            backgroundColor: bgColor,
            color: oppositeColor,
            title: `${item.company_name}- ${item.post_title}`,
            isVisible: true,
            category: 'allday', //allday 고정 
            start: datetimeConvert(item.start_dt),
            end: datetimeConvert(item.end_dt),
            customStyle: {
              fontFamily: "four",
              fontSize: '10px',
            }
          }
          return temp
        }
          
        
        )
      )


    },[isLoading,applyCompanyData])
    const onAfterRenderEvent = (event) => {
        
      };

      const getInstance = function(){
          return cal.current.getInstance()
      }
     const onClickNavi= (event) => {

        const button = event.target
        const actionName = (button.getAttribute('data-action') ?? 'month').replace('move-', '');
        getInstance()[actionName]();
        const calInstance = getInstance();
        const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();
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
            {
              isLoading?<Loading></Loading>:

              <>
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
                  height="70vh"
                  view="month"
                  month={{
                  dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                  startDayOfWeek : 0,
                  }}
                  ref={cal}
                  calendars={calendars}
                  events={eventData}
                  onAfterRenderEvent={onAfterRenderEvent}
                  template={template}
                  disableDblClick={true}
                  isReadOnly={true}
                  
              />
              </div>
              
              
              </>
            }
            </div>
        
    )
}