import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
    'Explore the world of data science with us! In our next club meeting, we will delve into various aspects of data analysis, machine learning, and artificial intelligence. Bring your curiosity and passion for data, and let\'s discover the insights hidden in the numbers together.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    members: [
      {
        id: 1,
        name: "ramesh ",
      }
    ]
  },
  // More posts...
  {
    id: 2,
    title: 'Software engineering club',
    href: '#',
    description:
    'Explore the world of data science with us! In our next club meeting, we will delve into various aspects of data analysis, machine learning, and artificial intelligence. Bring your curiosity and passion for data, and let\'s discover the insights hidden in the numbers together.', 
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    members: [
      {
        id: 1,
        name: "ramesh ",
      },
      {
        id: 2,
        name: "suresh ",
      },
      {
        id: 3,
        name: "Bhavesh",
      }
    ]
  },
  {
    id: 3,
    title: 'Another Sample Post',
    href: '#',
   description:
      'Explore the world of data science with us! In our next club meeting, we will delve into various aspects of data analysis, machine learning, and artificial intelligence. Bring your curiosity and passion for data, and let\'s discover the insights hidden in the numbers together.',
    date: 'Mar 18, 2020',
    datetime: '2020-03-18',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Software Engineer',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    members: [
      {
        id: 4,
        name: "Alice",
      },
      {
        id: 5,
        name: "Bob",
      },
      {
        id: 6,
        name: "Charlie",
      }
    ]
  },
  {
    id: 4,
    title: 'Web Development Workshop',
    href: '#',
    description:
      'Join our workshop to learn the latest trends in web development. Whether you are a beginner or an experienced developer, this workshop covers a wide range of topics, including front-end frameworks, back-end technologies, and best practices for building modern web applications.',
    date: 'Apr 1, 2020',
    datetime: '2020-04-01',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    members: [
      {
        id: 7,
        name: 'David',
      },
      {
        id: 8,
        name: 'Eva',
      },
      {
        id: 9,
        name: 'Frank',
      }
    ]
  },
  {
    id: 5,
    title: 'Data Science Club Meeting',
    href: '#',
    description:
      'Explore the world of data science with us! In our next club meeting, we will delve into various aspects of data analysis, machine learning, and artificial intelligence. Bring your curiosity and passion for data, and let\'s discover the insights hidden in the numbers together.',
    date: 'Apr 5, 2020',
    datetime: '2020-04-05',
    category: { title: 'Data Science', href: '#' },
    author: {
      name: 'Alex Rodriguez',
      role: 'Data Scientist',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    members: [
      {
        id: 10,
        name: 'Grace',
      },
      {
        id: 11,
        name: 'Henry',
      },
      {
        id: 12,
        name: 'Isabel',
      }
    ]
  },
];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore the <span className=' text-purple-500'>communities</span>  in your college</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to <span className=' text-purple-500' >grow</span> and <span className=' text-purple-500' >connect </span> with your peers.
            </p>
          </div>
          <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  
                  
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-bold text-purple-500 leading-6  group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0 " />
                        {post.author.name}
                      </a>
                    </p>    
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="mt-5 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Members
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {post.members.map((member) => (
                        <Menu.Item key={member.id}>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {member.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}