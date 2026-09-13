import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';
import MarketPriceNotice from './MarketPriceNotice';

export default function CartDrawer({ open, onClose }) {
  const { cart, change, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [message, setMessage] = useState('');

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  async function submit(e) {
    e.preventDefault();
    setMessage('Saving order…');
    try {
      const customer = Object.fromEntries(new FormData(e.currentTarget));
      const order = await api('/orders', {
        method: 'POST',
        body: JSON.stringify({ customer, items: cart, total })
      });
      const lines = cart.map(x => `• ${x.name} (${x.weight}) × ${x.qty}`).join('\n');
      clear();
      setMessage(`${order.orderNumber} saved`);
      window.open(
        `https://wa.me/923112605525?text=${encodeURIComponent(
          `Assalam-o-Alaikum, order ${order.orderNumber}\n${lines}\nTotal: Rs. ${total}\nDelivery: FREE\n${customer.name}, ${customer.phone}\n${customer.address}`
        )}`,
        '_blank'
      );
    } catch (err) {
      setMessage(err.message);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onMouseDown={onClose}>
      <aside
        onMouseDown={e => e.stopPropagation()}
        className="ml-auto h-full w-full max-w-md overflow-auto bg-cream p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              {checkout ? 'Delivery details' : 'Shopping bag'}
            </h2>
            <button
              onClick={onClose}
              className="text-3xl text-slate-500 hover:text-slate-900 cursor-pointer"
              aria-label="Close cart"
            >
              ×
            </button>
          </div>

          {checkout ? (
            <form onSubmit={submit} className="mt-6 grid gap-3">
              <input className="field" name="name" required placeholder="Full name" />
              <input className="field" name="phone" required placeholder="Phone number" />
              <textarea className="field" name="address" required placeholder="Delivery address" />
              <input className="field" name="area" required placeholder="Area" />
              <select className="field" name="payment">
                <option>Cash on delivery</option>
                <option>Bank transfer</option>
              </select>
              <textarea className="field" name="notes" placeholder="Order notes (optional)" />

              {/* Market Price Notice in Checkout */}
              <MarketPriceNotice variant="short" className="mt-2" />

              <div className="flex justify-between py-3 text-lg">
                <b>Total · Free delivery</b>
                <b>Rs. {total}</b>
              </div>

              <button className="btn bg-green-600 text-white hover:bg-green-700 py-3.5 rounded-xl font-bold">
                Place order & open WhatsApp
              </button>

              <p className="text-center text-sm font-bold text-leaf">{message}</p>
            </form>
          ) : (
            <>
              <div className="my-6 grid gap-3">
                {cart.map(x => (
                  <div key={x.id + x.weight} className="panel flex items-center gap-3 p-3">
                    <img src={'/' + x.image} className="h-14 w-14 rounded-xl object-cover" alt={x.name} />
                    <div className="flex-1">
                      <b>{x.name}</b>
                      <p className="text-sm text-slate-500">
                        {x.weight} · Rs. {x.price}
                      </p>
                    </div>
                    <button
                      onClick={() => change(x.id, x.weight, -1)}
                      className="h-8 w-8 rounded-lg bg-slate-200 font-bold hover:bg-slate-300 cursor-pointer"
                    >
                      −
                    </button>
                    <b>{x.qty}</b>
                    <button
                      onClick={() => change(x.id, x.weight, 1)}
                      className="h-8 w-8 rounded-lg bg-slate-200 font-bold hover:bg-slate-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                ))}
                {!cart.length && <p className="py-20 text-center text-slate-500">Your bag is empty.</p>}
              </div>

              {cart.length > 0 && (
                <div className="mt-6 border-t border-slate-200 pt-4">
                  {/* Market Price Notice in Cart */}
                  <MarketPriceNotice variant="short" />

                  <div className="flex justify-between text-lg font-bold text-slate-900 my-3">
                    <span>Subtotal</span>
                    <span>Rs. {total}</span>
                  </div>

                  <button
                    onClick={() => setCheckout(true)}
                    className="btn w-full bg-forest text-white py-3.5 rounded-xl text-base font-bold shadow-md hover:bg-emerald-950 cursor-pointer"
                  >
                    Continue to checkout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
