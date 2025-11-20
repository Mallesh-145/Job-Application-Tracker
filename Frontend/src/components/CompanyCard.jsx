import { Link } from 'react-router-dom'

function CompanyCard({ company }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {company.name}
          </h3>
          
          {company.address && (
            <a 
              href={mapUrl} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 text-xs mt-1 hover:text-indigo-500 flex items-center gap-1 transition-colors"
            >
              📍 {company.address}
            </a>
          )}
        </div>

        {/* Example Status Dot - You could make this dynamic later */}
        <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
      </div>
      
      {company.website_url && (
        <a 
          href={company.website_url} target="_blank" rel="noopener noreferrer"
          className="text-indigo-500 text-sm font-medium hover:text-indigo-700 flex items-center gap-1 mb-6"
        >
          🌐 Visit Website &rarr;
        </a>
      )}

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <Link 
          to={`/company/${company.id}`}
          className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-semibold hover:bg-indigo-100 transition-colors"
        >
          View Details
        </Link>
        
        {/* We removed delete from here to keep the card clean, 
            or we can keep a subtle icon */}
      </div>
    </div>
  );
}

export default CompanyCard;