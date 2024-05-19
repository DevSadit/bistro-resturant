const CompoHeading = ({ smHeading, bigHeading }) => {
  return (
    <div className="mx-auto w-4/12 text-center">
      <p className="text-orange-500 font-bold mb-2">--- {smHeading} ---</p>
      <h2 className="text-4xl border-y-4 uppercase py-3 mb-3">{bigHeading}</h2>
    </div>
  );
};

export default CompoHeading;
