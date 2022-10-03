import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../component/Layout";
import { getPlanet, getPlanetsById } from "../../redux/action";
import { Dialog, Transition } from "@headlessui/react";

const Planets = () => { 
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(data) {
    setIsOpen(true);
    dispatch(getPlanetsById(data))
  }
  const dispatch = useDispatch();
  const { planets, planetsbyid} = useSelector((state) => state.extraData);

  useEffect(() => {
    dispatch(getPlanet());
  }, [dispatch]);

  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Planets
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200">
              <div className="flex flex-wrap justify-around">
                {planets.map((item, idx) => (
                  <div className="relative flex flex-col p-6 mb-5 shadow-md hover:shadow-2xl rounded-2xl w-80">
                    <div className="text-2xl pt-4 pb-2 font-bold mb-3 text-blue-600">
                      {item.name}
                    </div>
                    <div className="text-start">
                    <div>Rotation period: {item.rotation_period}</div>
                      <div>Climate: {item.climate}</div>
                      <div>Terrain: {item.terrain}</div>
                    </div>
                    <button
                      onClick={(e) => openModal(idx + 1)}
                      className="btn bg-sky-500 uppercase mt-4"
                    >
                      Detail
                    </button>
                  </div>
                ))}
              </div>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h2"
                            className="text-lg font-xl text-bold leading-8 text-gray-900"
                          >
                            {planetsbyid.name}
                          </Dialog.Title>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Rotation eriod :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.rotation_period}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Orbital eriod :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.orbital_period}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            diameter :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.diameter}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Climate :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.climate}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Gravity :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.gravity}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Terrain :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.terrain}
                            </p>
                          </div>
                          <div className="mt-2 flex mb-2">
                            <span className="text-md text-gray-800">
                            Population :
                            </span>
                            <p className="text-md text-gray-700">
                              {planetsbyid.population}
                            </p>
                          </div>

                          <div className="mt-4 flex justify-end">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                            >
                              Close
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
              {/* <h1>People</h1>
            {isLoading
              ? "Loading...."
              : people.map((result) => (
                  <div>
                    <p>{result.name}</p>
                  </div>
                ))} */}
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </Layout>
  );
};

export default Planets;
