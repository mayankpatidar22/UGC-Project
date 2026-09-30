import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "/mo",
      description: "Try the platform at no cost.",
      features: [
        "20 Credits",
        "Standard quality",
        "Watermarked results",
        "Slower generation speed",
        "Email support",
      ],
      button: "Contact sales",
    },
    {
      title: "Creator",
      price: "$29",
      period: "/mo",
      description: "Creators & small teams.",
      features: [
        "50 Generations / month",
        "HD quality",
        "No watermark",
        "Video generation",
        "Priority support",
      ],
      button: "Get started",
      popular: true,
    },
    {
      title: "Custom",
      price: "Custom",
      period: "",
      description: "Scale across teams and agencies.",
      features: [
        "Unlimited generations",
        "API access",
        "Custom models",
        "Dedicated manager",
        "Chat + Email support",
      ],
      button: "Contact sales",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-indigo-400">
          PRICING
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Pricing Plans
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Our Pricing Plans are simple, transparent and flexible. Choose the
          plan that best suits your needs.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative flex min-h-[390px] flex-col rounded-xl p-6 ${
              plan.popular
                ? "border border-indigo-500/80 bg-[#21194f]"
                : "border border-indigo-900/50 bg-[#18143a]"
            }`}
          >

            {/* Popular */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-md bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white">
                  Most popular
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white sm:text-4xl">
                {plan.price}
              </span>

              {plan.period && (
                <span className="mb-1 text-sm text-gray-400">
                  {plan.period}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-gray-300">
              {plan.description}
            </p>

            {/* Features */}
            <div className="mt-7 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="text-lg text-indigo-400">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => {
                if (plan.button === "Get started") {
                  navigate("/generate");
                }
              }}
              className={`mt-8 h-10 w-full rounded-full text-sm font-medium transition ${
                plan.popular
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "border border-gray-700 bg-[#211d45] text-white hover:bg-[#292354]"
              }`}
            >
              {plan.button}
            </button>

          </div>
        ))}
      </div>

      {/* Bottom text */}
      <p className="mx-auto mt-12 max-w-md px-6 text-center text-sm leading-6 text-gray-400">
        Create stunning images for just{" "}
        <span className="font-medium text-indigo-400">5 credits</span>{" "}
        and generate immersive Video for{" "}
        <span className="font-medium text-indigo-400">10 credits</span>.
      </p>

    </section>
  );
};

export default Pricing;