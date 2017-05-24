module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log( `o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.total()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    this.input=input;
  }

  minimum() {
    var array=this.input;
	var min= array[0];
	for(var i = 1; i < array.length-1; i++){
		if(min > array[i])
			min=array[i];
	} 
	return min;
  }
	
	maxmum(){
		var array=this.input;
		var max= array[0];
		for(var i = 1; i < array.length-1; i++){
			if(max < array[i])
				max=array[i];
		} 
		return max;
	}

	total(){
		return this.input.length;
	}

	average(){
		var array=this.input;
		var sum= 0.0;
		var avg ;
		for(var i = 0; i < array.length; i++){
			sum+=array[i];
		} 
		avg = (sum/array.length).toFixed(2);
		return avg;
	}
}
