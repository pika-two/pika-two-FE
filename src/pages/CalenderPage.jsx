import React, { useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css'; // Calendar 스타일
import moment from 'moment';
import 'moment/locale/ko';
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import BackIcon from '../components/ui/icon/BackIcon';
import { useInternalRouter } from "./routing";

export default function CalenderPage() {
    const [value, onChange] = useState(new Date());
    const {goBack,push} = useInternalRouter();


  const calendars = [{ id: 'cal1', name: 'Personal' }];
  const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2022-06-28T12:00:00',
      end: '2022-06-28T13:30:00',
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2022-06-28T15:00:00',
      end: '2022-06-28T15:30:00',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

    
    return(
        <div>
            <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="지원 기업 채용 일정"/>
            <div
            style = {{
                margin: "30px auto",
            }}>
            </div>
            <div>
                <Calendar height="400px"
                    view="month"
                    month={{
                    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                    visibleWeeksCount: 4,
                    }}
                    dayName= { {
                        borderLeft: 'none',
                        backgroundColor: '#ffcc00',
                    }}
                    
                    />
            </div>
            <div className="text-gray-500 mt-4">
           {moment(value).format("YYYY년 MM월 DD일")} 
            </div>
        </div>
        
    )
}