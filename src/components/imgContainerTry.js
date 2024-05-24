import REact,{forwardRef} from 'react'


export const ImgContainerTry =  forwardRef((props,ref)=>{
    const {imgArr,left} = props
    return (
        <div
        className="flex  w-full h-full transition-margin relative"
        ref={ref}
        style={{ marginLeft: `${left}px` }}
      >
        {imgArr.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              className="m-0     max-w-full max-h-full object-cover w-full h-full "
            />
          );
        })}
      </div>
    )
})