export default function AnalystEstimate() {

  return (
    <div className='text-lg sm:text-2xl my-2 sm:my-5 flex gap-2 sm:gap-5'>
      <div className='flex items-center justify-center rounded-full text-xl sm:text-3xl h-20 sm:h-32 w-32 sm:w-40 font-bold bg-green-100 text-green-500'>76%</div>
      <div className='w-full flex flex-col justify-center'>
      <Estimate label="Buy" percentage={76} color="green" />
      <Estimate label="Hold" percentage={8} color="gray" />
      <Estimate label="Sell" percentage={16} color="red" />
      </div>
    </div>
  );
}

function Estimate({ label, percentage, color }) {
  const maxLabelWidth = Math.max('Buy'.length, 'Hold'.length, 'Sell'.length) * 10;

  return (
    <div className='flex w-full items-center gap-2 mt-2'>
      <div className='flex-shrink-0 sm:pr-2 text-xs' style={{ width: `${maxLabelWidth}px` }}>{label}</div>
      <div className='flex flex-grow items-center gap-1 sm:gap-3'>
        <div className={`h-2 sm:h-3 w-[${percentage}%] bg-${color}-500 rounded-full`}></div>
        <div className='text-xs sm:text-sm'>{percentage}%</div>
      </div>
    </div>
  );
}
