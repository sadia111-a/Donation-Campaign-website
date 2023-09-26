const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          We couldn't find the page you're looking for.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
