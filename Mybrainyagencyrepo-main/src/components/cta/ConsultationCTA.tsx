import BookingButton from '../booking/BookingButton';
import { track } from '../../utils/analytics';

const agencyEmail = import.meta.env.VITE_AGENCY_EMAIL || 'inbox@thebrainy.agency';

export function ConsultationCTA() {
	const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
	const utmParts = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content']
	  .map(k => urlParams.get(k) ? `${k}:${urlParams.get(k)}` : null)
	  .filter(Boolean)
	  .join(' | ');
	const subject = encodeURIComponent('Inquiry about AI Consultation');
	const body = encodeURIComponent(`Hi Brainy Agency team,\n\nI would like to discuss...\n\nUTM: ${utmParts || 'none'}\n`);
	const mailto = `mailto:${agencyEmail}?subject=${subject}&body=${body}`;
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
			<div className="max-w-4xl mx-auto text-center">
				<div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
						Ready to Start Your <span className="text-red-500">AI Journey?</span>
					</h2>
						<p className="text-xl text-gray-700 mb-8">Choose the best way to connect with our team</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<BookingButton className="px-8 py-4 text-lg">Book a Free Consultation</BookingButton>
						<a
							href={mailto}
							onClick={() => track('cta.mailto.click', { location: 'consultation-cta', hasUtm: !!utmParts })}
							className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
						>
							Email Us Directly
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ConsultationCTA;
