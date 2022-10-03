import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../component/Layout";
import { getPlanet, setaddPeople, setdeletePeople, setPeople } from "../../redux/action";
import { Tab } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required").min(3, 'must be at least 3 characters long').max(10, 'max 10 characters long'),
    height: yup.number("Must be number").positive().integer().required(),
    skin_color: yup.string().required(),
    eye_color: yup.string().required()
  })
  .required();

const Crud = () => {
  const [ActiveTab, setActiveTab] = useState("");
  const dispatch = useDispatch();
  const { newpeople } = useSelector((state) => state.extraData);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleDelete = (data) => {
    console.log(data.id);
    const id = newpeople.filter((item) => item.id !== data.id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setaddPeople(id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  useEffect(() => {
    dispatch(getPlanet());
  }, [dispatch]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitPeople = (data) => {
    let id = Math.random().toString(8).slice(2);
    const payload = { ...data, id: id };
    console.log("duar payload people", payload);
    dispatch(setaddPeople([...newpeople, payload]));
    Swal.fire("Add Succesfully");
  };

  return (
    <Layout>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap flex-row justify-around">
            {newpeople?.map((item) => (
              <div className="relative p-6 mb-5 shadow-md border-2 hover:shadow-2xl rounded-2xl w-80">
                <div className="text-2xl pt-2 pb-2 font-bold mb-3 text-blue-600">
                  {item.name}
                </div>
                <div className="text-start">
                  <div>Height: {item.height}</div>
                  <div>Skin color: {item.skin_color}</div>
                  <div>Eye color: {item.eye_color}</div>
                </div>
                <button onClick={(e)=>handleDelete(item)} className="btn bg-red-500 uppercase mt-4">Hapus</button>
              </div>
            ))}
          </div>
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200">
              <div className="w-full px-2 py-16 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl bg-blue-400 p-1">
                    <Tab
                      key="1"
                      onClick={() => setActiveTab("people")}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-md font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      People
                    </Tab>
                    <Tab
                      key="3"
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-md font-medium leading-5 text-blue-700",
                          "ring-blue ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      Stramsit
                    </Tab>
                    <Tab
                      key="1"
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-md font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      Planet
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel
                      key="1"
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <form onSubmit={handleSubmit(onSubmitPeople)}>
                        <div className="flex flex-col justify-center py-4 pb-14">
                          <span className="whitespace-normal px-4 text-start">
                            Name
                          </span>
                          <div className="mb-4 text-start w-1/2 px-4">
                            <input
                              type="text"
                              name="name"
                              className="bg-secondary-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Name"
                              {...register("name", { required: true })}
                            />
                            
                            <p className="text-red-500 font-extralight text-sm">{errors.name?.message}</p>
                            {/* {errors.name && <p className="text-red-500 font-extralight text-xs">Name is required</p>} */}
                          </div>
                          <span className="whitespace-normal text-start px-4">
                            Height
                          </span>
                          <div className="mb-4 text-start px-4 w-1/2">
                            <input
                              type="number"
                              name="name"
                              className="bg-secondary-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Height"
                              {...register("height", { required: true })}
                            />
                            <p className="text-red-500 font-extralight text-sm">{errors.height?.message}</p>
                          </div>
                          <span className="whitespace-normal text-start px-4">
                            Skin color
                          </span>
                          <div className="mb-4 text-start px-4 w-1/2">
                            <input
                              type="text"
                              name="name"
                              className="bg-secondary-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Skin color"
                              {...register("skin_color", { required: true })}
                            />
                            <p className="text-red-500 font-extralight text-sm">{errors.skin_color?.message}</p>
                          </div>
                          <span className="whitespace-normal px-4 text-start">
                            Eye color
                          </span>
                          <div className="mb-4 text-start px-4 w-1/2">
                            <input
                              type="text"
                              name="name"
                              className="bg-secondary-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Eye color"
                              {...register("eye_color", { required: true })}
                            />
                            <p className="text-red-500 font-extralight text-sm">{errors.eye_color?.message}</p>
                          </div>
                          <button class="btn px-4 w-1/2 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                            Save changes
                          </button>
                        </div>
                      </form>
                    </Tab.Panel>
                    <Tab.Panel
                      key="2"
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      ini konten2
                    </Tab.Panel>
                    <Tab.Panel
                      key="3"
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      ini konten3
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </Layout>
  );
};

export default Crud;
