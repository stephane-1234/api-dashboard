function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-3 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default Card