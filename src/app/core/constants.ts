export  class Constants
{
    public static registerURL= 'register/';
    public static Offwhite ="#f5f2d0"
    public static Offyellow="ecfcf0"
    public static domestic ="Domestic"
    public static documentOptions =[
        { id: 1, name: 'Domicile' },
        { id: 2, name: 'Marksheets' },
        { id: 3, name: 'Birth Certificate' },
        { id: 4, name: 'Police Clearance' },
        { id: 5, name: 'Passport' },
        { id: 6, name: 'Declaration' }
      ];

     public static categoryOptions =[
        {text:"Domestic",id:1},
        {text:"International",id:2}
      ];
    public static blankValue ='';

    public static error="Bad login request";

    public static studentURL='/students';

    public static decumentString='All Domestic International';
}