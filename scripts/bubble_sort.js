function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#f0ad4e");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#d9534f");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#d9534f");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#d9534f");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#d9534f");//Height update
            }
            div_update(divs[j],div_sizes[j], "#0275d8");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#5cb85c");//Color update
    }
    div_update(divs[0],div_sizes[0], "#5cb85c");//Color update

    enable_buttons();
}
