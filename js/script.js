document.addEventListener('DOMContentLoaded',()=>{
    console.log('script cargado');
    clickDaily=document.getElementById('day');
    clickWeek=document.getElementById('week');
    clickMonth=document.getElementById('month');
    
     const ids = [
        { title: 'Work', actual: 'work-actual', last: 'work-last' },
        { title: 'Play', actual: 'play-actual', last: 'play-last' },
        { title: 'Study', actual: 'study-actual', last: 'study-last' },
        { title: 'Exercise', actual: 'exercise-actual', last: 'exercise-last' },
        { title: 'Social', actual: 'social-actual', last: 'social-last' },
        { title: 'Self Care', actual: 'selfcare-actual', last: 'selfcare-last' }
    ];

    let data=[];



    fetch('.././data.json')
        .then(response=>response.json())
        .then (json => {
            data =json;
            showData('weekly');
    });
   
        
    function showData(period){
        data.forEach((item,i)=>{
            const actual=document.getElementById(ids[i].actual);
            const last=document.getElementById(ids[i].last);

            if (actual && last){
                actual.textContent=item.timeframes[period].current + 'hrs';
                let textLast='';
                if(period ==='daily') textLast ='Yesterday - ';
                else if(period === 'weekly') textLast='Last Week - ';
                else if(period === 'monthly') textLast= 'Last Month - ';

                last.textContent = textLast + item.timeframes[period].previous + 'hrs';

            }
        });
    }

    

    clickDaily.addEventListener('click',() => showData('daily'));
    clickWeek.addEventListener('click',() => showData('weekly'));
    clickMonth.addEventListener('click',() => showData('monthly'));

});