import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('fio');

  const searchTypes = [
    { id: 'fio', label: 'ФИО', icon: 'User' },
    { id: 'phone', label: 'Телефон', icon: 'Phone' },
    { id: 'document', label: 'Документы', icon: 'FileText' },
    { id: 'car', label: 'Авто', icon: 'Car' },
    { id: 'email', label: 'Email', icon: 'Mail' }
  ];

  const mockResults = [
    {
      id: 1,
      type: 'Физическое лицо',
      name: 'Иванов Иван Иванович',
      phone: '+7 (900) 123-45-67',
      email: 'ivan.ivanov@example.com',
      status: 'Активен'
    },
    {
      id: 2,
      type: 'Документ',
      name: 'Паспорт РФ',
      number: '1234 567890',
      status: 'Действителен'
    }
  ];

  const stats = [
    { label: 'Записей в базе', value: '2,847,392', icon: 'Database' },
    { label: 'Запросов за день', value: '14,267', icon: 'Activity' },
    { label: 'API вызовов', value: '8,934', icon: 'Code' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Icon name="Search" size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-black">SnowlyPoisk</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-black hover:text-gray-600 font-medium transition-colors">Главная</a>
              <a href="#search" className="text-black hover:text-gray-600 font-medium transition-colors">Поиск</a>
              <a href="#database" className="text-black hover:text-gray-600 font-medium transition-colors">База данных</a>
              <a href="#contacts" className="text-black hover:text-gray-600 font-medium transition-colors">Контакты</a>
            </nav>
            <Button variant="outline">
              <Icon name="Menu" size={18} className="md:hidden" />
              <span className="hidden md:inline">API Доступ</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Профессиональный поиск данных
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Быстрый и точный поиск информации по ФИО, телефонам, документам, номерам автомобилей и email адресам
          </p>
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto" id="search">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {searchTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={searchType === type.id ? "default" : "outline"}
                      onClick={() => setSearchType(type.id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon name={type.icon as any} size={16} />
                      <span>{type.label}</span>
                    </Button>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Input
                    placeholder={`Введите ${searchTypes.find(t => t.id === searchType)?.label.toLowerCase()}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 h-12 text-lg"
                  />
                  <Button size="lg" className="h-12 px-8">
                    <Icon name="Search" size={20} className="mr-2" />
                    Поиск
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section className="py-16 bg-white" id="database">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">База данных</h3>
            <p className="text-xl text-gray-600">Актуальная информация из проверенных источников</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" size={24} className="mr-2" />
                  Физические лица
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Активные записи</span>
                    <Badge>1,245,678</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Обновлено сегодня</span>
                    <Badge variant="outline">2,347</Badge>
                  </div>
                  <Separator />
                  <p className="text-sm text-gray-600">
                    Полная информация о физических лицах, включая контактные данные и документы
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Building" size={24} className="mr-2" />
                  Юридические лица
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Активные записи</span>
                    <Badge>456,789</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Обновлено сегодня</span>
                    <Badge variant="outline">1,234</Badge>
                  </div>
                  <Separator />
                  <p className="text-sm text-gray-600">
                    Реестр организаций с актуальными данными о регистрации и деятельности
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchQuery && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-black mb-6">Результаты поиска</h3>
            <div className="space-y-4">
              {mockResults.map((result) => (
                <Card key={result.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{result.type}</Badge>
                          <Badge>{result.status}</Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-black">{result.name}</h4>
                        <div className="text-gray-600">
                          {'phone' in result && <div>Телефон: {result.phone}</div>}
                          {'email' in result && <div>Email: {result.email}</div>}
                          {'number' in result && <div>Номер: {result.number}</div>}
                        </div>
                      </div>
                      <Button variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* API Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">API для интеграции</h3>
            <p className="text-xl text-gray-300">Подключите наш сервис к вашим системам</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Code" size={24} className="mr-2" />
                  REST API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">GET /api/search</div>
                    <div className="text-gray-400">?type=fio&query=Иванов</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Документация API
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Zap" size={24} className="mr-2" />
                  Возможности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Высокая скорость ответа
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    99.9% времени работы
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Защищенные запросы
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon name="Check" size={16} className="mr-2 text-green-400" />
                    Гибкие тарифы
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 bg-white" id="contacts">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">Контакты</h3>
            <p className="text-xl text-gray-600">Свяжитесь с нами для получения доступа</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Email</div>
                      <div className="text-gray-600">support@snowlypoisk.ru</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Телефон</div>
                      <div className="text-gray-600">+7 (800) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Время работы</div>
                      <div className="text-gray-600">Ежедневно, 24/7</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Icon name="Search" size={14} className="text-black" />
              </div>
              <span className="font-bold">SnowlyPoisk</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 SnowlyPoisk. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}