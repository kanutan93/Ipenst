import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../services/form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  sum: any = 0;
  tasks = [
    {
      type: 'checkbox',
      id: 'taskPenetration',
      title: 'Какие задачи преследуются проведением тестирования на проникновение? :',
      options: [
        {
          title: 'Выполнение требования регулятора или стандарта по безопасности',
          value: 10000
        },
        {
          title: 'Превентивное выявление уязвимостей системы',
          value: 10000
        }
      ]
    },
    {
      type: 'checkbox',
      id: 'taskMethod',
      title: 'Какой метод тестирования Вас интересует? :',
      options: [
        {
          title: 'Метод "White box" - проводится после получения исполнителем всех запрошенных данных.',
          value: 10000
        },
        {
          title: 'Метод "Black box" - проводится после предоставления заказчиком минимального количества данных.',
          value: 10000
        }
      ]
    },
    {
      id: 'whoIP',
      type: 'text',
      title: 'Какие IP-адреса, Web-сайты, приложения, коммутационное оборудование будут участвовать в тестировании?:',
      value: ''
    },
    {
      type: 'checkbox',
      id: 'whatResult',
      title: 'Какие цели тестирования Вас интересуют?:',
      options: [
        {
          title: 'Получение полного перечня уязвимостей',
          value: 10000
        },
        {
          title: 'Подтверждение существования уязвимостей без их эксплуатации',
          value: 10000
        },
        {
          title: 'Проверка реакции систем защиты на попытку проникновения',
          value: 10000
        },
        {
          title: 'Эксплуатация уязвимостей. Действия могут привести к нарушению стабильной работы системы',
          value: 10000
        }
      ]
    },
    {
      type: 'checkbox',
      id: 'whatObject',
      title: 'Какие объекты предприятия следует подвергнуть тестированию?:',
      options: [
        {
          title: 'Приложения',
          value: 10000
        },
        {
          title: 'Веб-сайт',
          value: 10000
        },
        {
          title: 'Сеть',
          value: 10000
        },
        {
          title: 'Сетевые приложения',
          value: 10000
        },
        {
          title: 'Беспроводные коммуникации',
          value: 10000
        },
      ],
    },
    {
      type: 'checkbox',
      id: 'extraTest',
      title: 'Требуется ли приведение дополнительных тестов?:',
      options: [
        {
          title: 'Физическое проникновение на предприятие в обход систем безопасности',
          value: 10000
        },
        {
          title: 'Получение конфиденциальной информации от сотрудников методом социальной инженерии',
          value: 10000
        }
      ]
    },
    {
      type: 'radio',
      id: 'delay',
      title: 'Укажите периодичность и(или) способ информирования о статусе тестирования?:',
      options: [
        {
          title: 'Полный отчет обо всех найденных уязвимостях по окончании тестирования',
          value: 10000
        },
        {
          title: 'Информирование о каждой найденной уязвимости',
          value: 10000
        },
        {
          title: 'Ежедневное информирование о статусе тестирования',
          value: 10000
        },
        {
          title: 'Информирование только о критических уязвимостях сразу после их нахождения',
          value: 10000
        }
      ]
    },
    {
      type: 'radio',
      id: 'prodOrDev',
      title: 'Будет ли проходить тестирование в уже рабочей ("боевой") и настроенной среде?:',
      options: [
        {
          title: 'Да',
          value: 10000
        },
        {
          title: 'Нет',
          value: 0
        }
      ]
    },
    {
      type: 'radio',
      id: 'sogl',
      title: 'Будет ли проводиться согласование со службой безопасности предприятия?:',
      options: [
        {
          title: 'Да',
          value: 10000
        },
        {
          title: 'Нет',
          value: 0
        }
      ]
    },
    {
      type: 'radio',
      id: 'warn',
      title: 'Предупреждено ли руководство компании о предстоящем тестировании и о том, что оно проводится с целью найти/доказать уязвимости в системе?:',
      options: [
        {
          title: 'Да',
          value: 10000
        },
        {
          title: 'Нет',
          value: 0
        }
      ]
    },
    {
      type: 'radio',
      id: 'warnProd',
      title: 'Предупреждено ли руководство компании о последствиях при проведении тестирования на рабочем ("боевом") оборудовании/системе?:',
      options: [
        {
          title: 'Да',
          value: 10000
        },
        {
          title: 'Нет',
          value: 0
        }
      ]
    },
    {
      id: 'name',
      type: 'text',
      title: 'Ваше имя',
      value: ''
    },
    {
      id: 'phone',
      type: 'text',
      title: 'Телефон',
      value: ''
    },
    {
      id: 'email',
      type: 'email',
      title: 'Email',
      value: ''
    },
  ];
  constructor(public fb: FormBuilder, private formService: FormService, private router: Router) {
    this.form = fb.group({
      'taskPenetration': new FormArray([]),
      'taskMethod': new FormArray([]),
      'whoIP': '',
      'whatObject': new FormArray([]),
      'extraTest': new FormArray([]),
      'delay': '',
      'sogl': '',
      'warn': '',
      'whatResult': new FormArray([]),
      'prodOrDev': '',
      'warnProd': '',
      'name': '',
      'phone': '',
      'email': '',
    });
    this.form.valueChanges.subscribe((values) => {
      this.sum = 0;
      this.getSum(values);
    });
  }

  ngOnInit() {

  }

  onFormSubmit(form) {
    const request: any = {};
    request.tasks  = Object.keys(form.value)
      .filter(key => {
        return form.value[key] !== '' && ((form.value[key].length && form.value[key].length > 0) || form.value[key].value);
      })
      .map(key => {
        const currentTask = this.tasks.find(task => task.id === key);
        return Object.assign({key: key, title: currentTask.title, value: form.value[key]});
    });
    request.email = form.value['email'];
    request.sum = this.sum;
    this.formService.onPost(request);
    this.router.navigate(['/success']);
  }

  getSum(values) {
    Object.keys(values).forEach(item => {
      if (values[item] instanceof Array) {
        values[item].forEach(checkItem => {
          this.sum += checkItem.value;
        });
      } else if (typeof values[item] !== 'string') {
        this.sum += values[item].value;
      }
    });
  }

  onCheckChange(event, option, taskiD) {
    const formArray: FormArray = this.form.get(taskiD) as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(option));
    } else {
      formArray.controls.forEach((ctrl: FormControl, i) => {
        if (ctrl.value.id === option.id) {
          formArray.removeAt(i);
          return;
        }
      });
    }
  }

}
