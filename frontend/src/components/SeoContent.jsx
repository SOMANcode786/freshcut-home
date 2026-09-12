import Seo from './Seo';

export default function SeoContent() {
  return (
    <>
      <Seo
        title="FreshCut Home | Fresh Cut Vegetables Delivery Karachi"
        description="Order washed, hygienically cut and ready-to-cook vegetables online in Karachi with free next-day delivery."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-leaf">
              Fresh vegetable delivery in Karachi
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold">
              Ready-to-cook vegetables prepared for your kitchen
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              FreshCut Home supplies washed, peeled and freshly cut vegetables across Karachi. Choose
              chopped onions, sliced capsicum, vegetable mixes, peeled garlic, juice cuts, leafy
              vegetables and cooking platters.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold">Why order from FreshCut Home?</h2>
            <ul className="mt-5 grid gap-3 text-slate-600">
              <li>✓ Hygienically washed and freshly prepared vegetables</li>
              <li>✓ Whole, sliced, chopped, peeled and cube-cut options</li>
              <li>✓ Free next-day delivery on orders placed before 12:00 AM</li>
              <li>✓ Online ordering with WhatsApp confirmation</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <h2 className="font-serif text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="panel p-5">
              <h3 className="font-bold">Do you deliver fresh-cut vegetables in Karachi?</h3>
              <p className="mt-2 text-slate-600">
                Yes. FreshCut Home provides vegetable preparation and delivery within available Karachi service areas.
              </p>
            </article>
            <article className="panel p-5">
              <h3 className="font-bold">When will my order arrive?</h3>
              <p className="mt-2 text-slate-600">
                Orders placed before 12:00 AM are scheduled for next-day delivery, subject to confirmation.
              </p>
            </article>
            <article className="panel p-5">
              <h3 className="font-bold">Which delivery areas do you cover in Karachi?</h3>
              <p className="mt-2 text-slate-600">
                We deliver across major Karachi neighborhoods including Clifton, DHA, PECHS, Gulshan-e-Iqbal, Johar, North Nazimabad, Saddar, and surrounding areas.
              </p>
            </article>
            <article className="panel p-5">
              <h3 className="font-bold">Is there a minimum order amount?</h3>
              <p className="mt-2 text-slate-600">
                There is no minimum order limit. All orders placed before 12:00 AM qualify for free next-day delivery across Karachi.
              </p>
            </article>
            <article className="panel p-5">
              <h3 className="font-bold">What payment methods are accepted?</h3>
              <p className="mt-2 text-slate-600">
                We accept Cash on Delivery (COD) and direct Bank Transfer upon order placement or delivery.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
