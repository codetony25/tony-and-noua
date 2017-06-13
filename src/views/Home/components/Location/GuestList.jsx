import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
    display: 'inline-block',
    width: '50%'
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class GuestList extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Close"
        secondary={true}
        onClick={this.handleClose}
      />
    ];

    const radios = [
      'ADELYNN THAO',
      'ALENA THAO',
      'ALEX LEE',
      'ALEX LY',
      'ALLISON PYLE',
      'AMY YANG',
      'ATHENA VUE',
      'ALEB CHA',
      'BRANDON IWASAKI',
      'CALLISTE THAO',
      'CARTER VUE',
      'CECILIA MOUA',
      'CHA MOUAVANGSOU',
      'CHA YANG',
      'CHRIS CASTILLO',
      'CHARLOTTE CHEN',
      'CHIMENG YANG',
      'CHLOEY THAO',
      'CHUEFUE XIONG',
      'DANIEL VUE',
      'DIANE ULLOA',
      'DELYNN THAO',
      'ADONIS PEREZ-VUE',
      'GRANDMA CHAY YIA YANG',
      'GRANDPA CHAY YIA YANG',
      'JACKIE VUE MOUA',
      'JACKIE XIONG',
      'JAKE CHEN',
      'JAMIE YOUA YANG',
      'JAYJAY MARIE',
      'JEANNIE',
      'JESUS HERNANDEZ',
      'JOCELYN YANG',
      'JOHN SALCIDO',
      'KA VUE',
      'KAILEE YANG',
      'KAITLYN YANG',
      'KALEO KAUHAA HOUSE',
      'KARI YANG',
      'KIA VUE-THAO',
      'LEE YANG',
      'LENNI CORZO',
      'LOGAN SALCIDO',
      'LUNA XIONG',
      'LY KOU',
      'MAI BANG',
      'MAI NHIA VUE',
      'MAINUE VUE',
      'MELINDA PEREZ-VUE',
      'MONICA LOPEZ YANG',
      'MYA CHEN',
      'MYLEAH XIONG',
      'NALEE CHA',
      'NICO WIBOWOW',
      'NIKKY XIONG',
      'ODYS THAO',
      'PA NIA VUE',
      'PASOUA YANG',
      'PETER VUE',
      'PETER XIONG-XIA YANG',
      'RICHARD XIONG',
      'ROB CHEN',
      'RUDI MARCI',
      'SARAH YANG',
      'SAUCI XIONG',
      'VANG VUE',
      'SHAWN PHENG XIONG',
      'SOUA THAO',
      'STEPHANIE XIONG',
      'SUZIE YANG',
      'TENG YANG',
      'TOMMY VUE',
      'TONG XIA VUE',
      'TONGKOU XIONG',
      'TRINITY YANG',
      'TU CHA',
      'TYLER CHA',
      'VAN ANH NGUYEN',
      'VANG MOUAVANGSOU',
      'VIKKY XIONG',
      'WANG YU XIONG',
      'TONGKOU XIONG',
      'TRINITY YANG',
      'TU CHA',
      'TYLER CHA',
      'VAN ANH NGUYEN',
      'VANG MOUAVANGSOU',
      'VIKKY XIONG',
      'WANG YU XIONG',
      'XENGXAY YANG',
      'YUPHENG YANG',
      'ALICE ANH',
      'ALLISON WRIGHT',
      'BAILEY WRIGHT',
      'DAVID VALVERDE SPRITE',
      'DIANA NGUYEN',
      'ERICA PHAAVONG',
      'FAITH BRADY',
      'HUNG DANG',
      'INES FAGUAS',
      'JOANN REITH',
      'JOHN WRIGHT',
      'JULIE',
      'KATRINA HO',
      'LISA NAKAMOTO',
      'LISA SOROCHAN',
      'MARC LEE',
      'MARCELO ALVARADO',
      'MASAYA KAWAUCHI',
      'NATHAN BRADY',
      'NIKKI THUY NGUYEN',
      'RYAN NGUYEN',
      'SANDY LAM',
      'SAO TIAN WANT',
      'SARA LY',
      'SJ AHN',
      'STEPHANIE FLORESCA',
      'STEVEN CHEN',
      'STEVEN CHEN +1',
      'TANIA NGUYEN',
      'TOMMY CHEN',
      'VALARIE ALVARADO',
      'VICTORIA NGUYEN',
      'JAMES LAM',
      'JUSTINE TRAN',
      'GUINEVERE JUST',
      'JUAN'
    ];

    return (
      <div>
        <button className="btn btn-primary btn-rounded" onClick={this.handleOpen}>
          View Guestlist
        </button>
        <Dialog
          title="Confirmed Guestlist"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {(() => {
            return radios.map((item, index) => {
             return (
               <p
                 key={index}
                 style={styles.radioButton}
               >
                 {index + 1}. {item}
               </p>
             )
            })
          })()}
        </Dialog>
      </div>
    );
  }
}